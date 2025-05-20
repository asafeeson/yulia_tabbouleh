import { MEDUSA_BACKEND_URL, MEDUSA_PUBLISHABLE_KEY, NODE_ENV } from '$env/static/private';
import Medusa from '@medusajs/js-sdk';

if (!MEDUSA_BACKEND_URL) {
	throw Error('Нет URL для SSR доступа к Medusa бэкенду. Добавьте в .env MEDUSA_BACKEND_URL');
}

if (!MEDUSA_PUBLISHABLE_KEY) {
	throw Error('Нет ключа  доступа к бэкенду Medusa. Добавьте в .env MEDUSA_PUBLISHABLE_KEY');
}

let sdkInstance: Medusa | null = null;

export async function getMedusaClient(): Promise<Medusa> {
	if (!sdkInstance) {
		sdkInstance = new Medusa({
			baseUrl: MEDUSA_BACKEND_URL,
			publishableKey: MEDUSA_PUBLISHABLE_KEY,
			debug: NODE_ENV === 'production',
			auth: {
				type: 'session'
			}
		});
	}
	return sdkInstance;
}
