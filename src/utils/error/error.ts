import Swal from 'sweetalert2'

interface ErrorType {
    message: string
}

export function HandleError ({ message }: ErrorType) {
    Swal.fire({
        icon: 'error',
        title: 'fail...',
        text: message,
    })
}