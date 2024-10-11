import { v4 as uuidv4 } from "uuid";
import { IIdentifierGenerator } from "../domain/IIdentifierGenerator";

export class UuidGenerator implements IIdentifierGenerator {
  generate(): string {
    return uuidv4();
  }
}
