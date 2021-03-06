import { Moment } from 'moment'

export interface RequestInit {
  headers?: any
  method?: string
  body?: string
}

export interface Headers {
  get(name: string): string | null
}

export interface Response {
  headers: Headers
  text: () => Promise<string>
  json: () => Promise<any>
  blob: () => Promise<Blob>
}

export interface Fetch {
  (url: string, init?: RequestInit): Promise<Response>
}

export interface AuthTicket {
  order: string
  token: string
}

/**
 * @export
 * @interface CalendarItem
 */
export interface CalendarItem {
  id: number;
  title: string;
  description?: string;
  location?: string;
  startDate?: Moment;
  endDate?: Moment;
  allDay?: boolean;
}

/**
 * @export
 * @interface Child
 */
export interface Child {
  id: string;
  /**
   * <p>Special ID used to access certain subsystems</p>
   * @type {string}
   * @memberof Child
   */
  sdsId: string;
  name: string;
  /**
   * <p>F - förskola, GR - grundskola?</p>
   * @type {string}
   * @memberof Child
   */
  status?: string;
  schoolId?: string;
}

/**
 * @export
 * @interface Classmate
 */
export interface Classmate {
  sisId: string;
  className?: string;
  firstname: string;
  lastname: string;
  guardians: Guardian[];
}

/**
 * @export
 * @interface Guardian
 */
export interface Guardian {
  email?: string;
  firstname: string;
  lastname: string;
  mobile?: string;
  address?: string;
}

/**
 * <p>A news item from the school, for example a weekly news letter</p>
 * @export
 * @interface NewsItem
 */
export interface NewsItem {
  id?: string;
  header?: string;
  intro?: string;
  body?: string;
  published: Moment;
  modified?: Moment;
  imageUrl?: string;
}

/**
 * @export
 * @interface Notification
 */
export interface Notification {
  id: string
  sender: string
  dateCreated: Moment
  message: string
  /**
   * <p>
   *  URL with the actual message as a webpage. Needs separate login.
   * TODO: Investigate how to solve this somehow
   * </p>
   * @type {string}
   * @memberof Notification
   */
  url: string
  category: string | null
  type: string
}

/**
 * @export
 * @interface ScheduleItem
 */
export interface ScheduleItem {
  title: string
  description?: string
  location?: string
  startDate: Moment
  endDate: Moment
  oneDayEvent: boolean
  allDayEvent: boolean
}

export interface MenuItem {
  title: string
  description: string
}

export interface User {
  personalNumber: string
  isAuthenticated: boolean
  firstName: string
  lastName: string
  email: string | null
  notificationId: string
}
