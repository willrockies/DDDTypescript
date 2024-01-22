import EventInterface from "./event.interface";

export default interface EventHandlerInterface {
  handle(event: EventInterface):void;
}