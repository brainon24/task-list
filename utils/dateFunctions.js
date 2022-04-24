import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'

export const getFortmatDistanceToNow = ( date ) => {

    const fromNow = formatDistanceToNow( new Date(date), { locale: es, addSuffix: false })

    //const fromNow = formatDistanceToNow(date, { locale: es });

    return `Hace ${fromNow}`;

}
