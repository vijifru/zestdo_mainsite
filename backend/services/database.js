/**
 * Database Service
 * Handles all mock.json read/write operations
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'data', 'mock.json');

const loadData = () => {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading mock data:', error);
    return {};
  }
};

const saveData = (data) => {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving mock data:', error);
    return false;
  }
};

const getCollection = (collectionName) => {
  const data = loadData();
  return data[collectionName] || [];
};

const addToCollection = (collectionName, item) => {
  const data = loadData();
  if (!data[collectionName]) {
    data[collectionName] = [];
  }
  data[collectionName].push(item);
  return saveData(data);
};

const findById = (collectionName, itemId) => {
  const collection = getCollection(collectionName);
  return collection.find(item => item.id === itemId) || null;
};

const findByField = (collectionName, field, value) => {
  const collection = getCollection(collectionName);
  return collection.filter(item => item[field] === value);
};

const getStats = () => {
  const data = loadData();
  return data.stats || {};
};

module.exports = {
  loadData,
  saveData,
  getCollection,
  addToCollection,
  findById,
  findByField,
  getStats
};
