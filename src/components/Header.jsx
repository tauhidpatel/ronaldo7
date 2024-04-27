import ronaldoImage from '../assets/ronaldo.png'

export default function Header() {
    return (
        <>
        <div className='header my-4 flex flex-col items-start space-y-4'>
            <img className='header__img h-24' src={ronaldoImage} alt="ronaldo" />
            <p className='cr7 py-1 px-5 bg-gray-100 rounded'>CR7</p>
            <h1 className='text-4xl text-gray-700 font-bold'>
                Cristiano Ronaldo's 7 best quotes, as <br/>voted on by the internet
            </h1>
        </div>
        </>
    );
}