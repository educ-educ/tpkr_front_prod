import './End3.scss'

export default function End3() {

    return (
        <div className='container-fluid def-background'>
            <div className='row sub-header justify-content-start'>
                <div className='sub-header__box'>
                    <h1 className='sub-header__title'>Пафосное название курса длинное</h1>
                    <p className='sub-header__description'>Какая-то очень очень длинная строка</p>
                </div>
            </div>
            <div className='row justify-content-between'>
                <div className='col-2 sidebar'>
                    <div className='btn sidebar__element'>Обучающиеся</div>
                    <div className='btn sidebar__element'>Статистика</div>
                    <div className='btn sidebar__element'>Блоки заданий</div>
                    <div className='btn sidebar__element'>Описания</div>
                    <div className='btn sidebar__element'>Отзывы</div>
                    <div className='btn sidebar__element'>Рейтинг курса</div>
                </div>
                <div className='col-10'></div>
            </div>
        </div>
    );
}