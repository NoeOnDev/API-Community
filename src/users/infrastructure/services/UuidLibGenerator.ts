import { v4 as uuidv4 } from "uuid";
import { UuidGenerator } from "../../domain/interfaces/UuidGenerator";

export class UuidLibGenerator implements UuidGenerator {
  generate(): string {
    return uuidv4();
  }
}
