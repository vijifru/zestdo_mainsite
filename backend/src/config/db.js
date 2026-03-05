/**
 * Database Configuration
 * Using JSON file as mock database
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../../data/mock.json');

/**
 * Load all data from mock.json
 */
const loadData = () => {
  try {
    if (!fs.existsSync(DATA_PATH)) {
      // Initialize with default data if file doesn't exist
      const defaultData = {
        users: [],
        parents: [],
        trainers: [],
        apartments: [],
        classes: [],
        testimonials: [],
        subscriptionPlans: [],
        communities: [],
        contactSubmissions: [],
        waitlistSignups: [],
        trainerApplications: [],
        apartmentInquiries: [],
        stats: {
          apartments: 50,
          trainers: 100,
          happyKids: 2000,
          activityCategories: 8
        }
      };
      saveData(defaultData);
      return defaultData;
    }
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading data:', error);
    return {};
  }
};

/**
 * Save data to mock.json
 */
const saveData = (data) => {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

/**
 * Get a specific collection
 */
const getCollection = (collectionName) => {
  const data = loadData();
  return data[collectionName] || [];
};

/**
 * Add item to collection
 */
const addToCollection = (collectionName, item) => {
  const data = loadData();
  if (!data[collectionName]) {
    data[collectionName] = [];
  }
  data[collectionName].push(item);
  return saveData(data);
};

/**
 * Update item in collection
 */
const updateInCollection = (collectionName, id, updates) => {
  const data = loadData();
  const collection = data[collectionName] || [];
  const index = collection.findIndex(item => item.id === id);
  if (index !== -1) {
    data[collectionName][index] = { ...collection[index], ...updates };
    return saveData(data);
  }
  return false;
};

/**
 * Find item by ID
 */
const findById = (collectionName, id) => {
  const collection = getCollection(collectionName);
  return collection.find(item => item.id === id) || null;
};

/**
 * Find item by field
 */
const findByField = (collectionName, field, value) => {
  const collection = getCollection(collectionName);
  return collection.find(item => item[field] === value) || null;
};

/**
 * Find all items by field
 */
const findAllByField = (collectionName, field, value) => {
  const collection = getCollection(collectionName);
  return collection.filter(item => item[field] === value);
};

/**
 * Delete item from collection
 */
const deleteFromCollection = (collectionName, id) => {
  const data = loadData();
  const collection = data[collectionName] || [];
  const index = collection.findIndex(item => item.id === id);
  if (index !== -1) {
    data[collectionName].splice(index, 1);
    return saveData(data);
  }
  return false;
};

module.exports = {
  loadData,
  saveData,
  getCollection,
  addToCollection,
  updateInCollection,
  findById,
  findByField,
  findAllByField,
  deleteFromCollection
};
