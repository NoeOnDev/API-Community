export interface NotificationService {
  send(token: string, contactInfo: string): Promise<void>;
}

export interface NotificationServiceFactory {
  getService(context: string): NotificationService;
}
