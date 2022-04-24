import { formatDistanceToNow } from 'date-fns'
import { es, en } from 'date-fns/locale'

export const getFortmatDistanceToNow = ( date ) => {

    const fromNow = formatDistanceToNow( new Date(date), { locale: en, addSuffix: false })

    //const fromNow = formatDistanceToNow(date, { locale: es });

    //return `Hace ${fromNow}`;
    return `${fromNow.charAt(0).toUpperCase()}${fromNow.slice(1)}`;
}
