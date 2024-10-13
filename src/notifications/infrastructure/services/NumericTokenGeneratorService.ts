import { TokenGeneratorService } from "../../domain/services/TokenGeneratorService";

export class NumericTokenGeneratorService implements TokenGeneratorService {
  generate(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
