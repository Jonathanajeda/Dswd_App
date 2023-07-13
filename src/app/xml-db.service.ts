import { Injectable } from '@angular/core';
import { xml2json, json2xml } from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class XmlDbService {
  private readonly DB_NAME = 'data.xml';
  private readonly INITIAL_DB_CONTENT = '<?xml version="1.0" encoding="UTF-8"?><root></root>';

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    const existingData = localStorage.getItem(this.DB_NAME);
    if (!existingData) {
      localStorage.setItem(this.DB_NAME, this.INITIAL_DB_CONTENT);
    }
  }

  public saveData(data: any) {
    const existingData = this.getDatabaseData();
    existingData.root.elements.push({ type: 'element', name: 'item', elements: data });
    const xmlData = json2xml(existingData, { compact: true });
    localStorage.setItem(this.DB_NAME, xmlData);
  }

  public getData(): any[] {
    const existingData = this.getDatabaseData();
    if (existingData.root.elements) {
      return existingData.root.elements.map((element: any) => element.elements);
    }
    return [];
  }

  private getDatabaseData(): any {
    const xmlData = localStorage.getItem(this.DB_NAME);
    if (xmlData) {
      return xml2json(xmlData, { compact: true });
    }
    return null;
  }  
}
