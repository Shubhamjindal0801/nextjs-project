'use client'

import { useEffect, useState } from 'react'
import Header from '../../../components/Common/Header'
import Footer from '../../../components/Common/Footer'
import Search from '../../../components/Dashboard/Search'
import TabsComponent from '../../../components/Dashboard/Tabs'
import { get100Coins } from '../../../functions/get100Coins'
import BackToTop from '../../../components/Common/BackToTop'
import Loader from '../../../components/Common/Loader'
import PaginationComponent from '../../../components/Dashboard/Pagination'

function DashboardPage() {
    const [coins, setCoins] = useState([])
    const [pageCoins, setPageCoins] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [apiWork, setApiWork] = useState(true)


    const handlePageChange = (event, value) => {
        setPage(value);
        var previousIndex = (value - 1) * 10
        setPageCoins(coins.slice(previousIndex, previousIndex + 10))
    };

    const onSearchChange = (e) => {
        console.log(coins)
        setSearch(e.target.value);
        
    }
    var filterdCoins = coins.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
            
    );
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const myCoins = await get100Coins()
        if (myCoins) {
            setApiWork(true)
            setCoins(myCoins)
            setPageCoins(myCoins.slice(0, 10))
            setIsLoading(false)
        }
        else {
            setApiWork(false)
        }
        
    }

    return (
        <>
            <Header />
            <BackToTop />
            {apiWork ?
                <>{ isLoading?<Loader /> : < div styles={{ minHeight: "90vh" }}>

                    <Search search={search} onSearchChange={onSearchChange} />
                    <TabsComponent
                        coins={search ? filterdCoins : pageCoins}
                        setSearch={setSearch}
                    />
                    {
                        !search && (
                            <PaginationComponent page={page} handlePageChange={handlePageChange} />
                        )
                    }

                </div >}
                </>
                :
                <p>API CRASHES</p>
}
            <Footer />
        </>
    )
}

export default DashboardPage