import { generateClasses} from '@formkit/themes'

const config = {
    config: {
        clasees: generateClasses({
            text: {
                message: 'text-red-500'
            }
        })
    }
}

export default config