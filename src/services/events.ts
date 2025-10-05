import data from "../data/events.json"

export interface Event {
  id: number;
  images: string[];
  title: string;
  place: string;
  description: string;
  cover: string;
  date: string;
}

const events = (data as Event[])

export const getEvents = () => {
    console.log(data)
    return events
}