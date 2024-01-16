import IconSearch from '@/assets/icon-search.svg';
import Image from 'next/image';

export function Search() {
    return (
        <div className='flex items-center gap-4'>
            <label htmlFor="search">
                <Image
                    className='cursor-pointer'
                    src={IconSearch}
                    alt="Search"
                />
            </label>
            <input type="text" 
            id='search' 
            className='bg-transparent outline-none text-white placeholder:text-white pr-5' 
            placeholder='Buscar'/>
        </div>
    );
}