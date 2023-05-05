

export function withCard(InputComponent) {

    return function (props) {
        return (
            <div className='card'>
                <div className='card-header bg-primary'>{props.title}</div>
                <div className='card-body'>
                    <InputComponent {...props} />
                </div>
            </div>
        )
    }

}