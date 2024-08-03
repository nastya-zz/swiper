import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'swiper-statistic'
interface IStatistics {
  swipes: number
  spacesFreed: number
}

class Store {
  private stat: IStatistics = {
    swipes: 0,
    spacesFreed: 0
  }
  get statistic() {
    return this.stat
  }
  set statistic(value: IStatistics) {
    this.stat = value
  }

  constructor() {
    this.getStatistics().then(data => {
      this.statistic = data
    })
  }

  async getStatistics() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : this.statistic;
    } catch (e) {
      // saving error
      return this.statistic;
    }
  }

  async saveStatistics(stat: IStatistics) {
    try {
      const jsonValue = JSON.stringify(stat);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      // saving error
    }
  }
}

const statisticStore = new Store();
export {statisticStore}