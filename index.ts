import { Country, Environment, GetBaseUrl } from "./src/config/config.service";
import { AuthGroup } from "./src/auth/auth.service";
export class ZaloraInstance {
  private country: Country = Country.GSC;
  private environment: Environment = Environment.Staging;
  private clientId: string = "";
  private clientSecret: string = "";

  public authGroup: AuthGroup;

  constructor(config: {
    country?: Country;
    environment?: Environment;
    clientId: string;
    clientSecret: string;
  }) {
    if (config.country) {
      this.country = config.country;
    }
    if (config.environment) {
      this.environment = config.environment;
    }
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;

    const baseUrl = GetBaseUrl(this.country, this.environment);

    this.authGroup = new AuthGroup({
      baseUrl: baseUrl,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });
  }
}
