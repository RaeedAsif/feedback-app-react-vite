import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCurrentUser } from '../../services/api';
import { Hamburger, Menu, MenuLink, PrimaryNav } from './style'


const Navbar = () => {
  const { isLoading, data, error, refetch} = useQuery('getUser', getCurrentUser);

  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <div className='user_name'>
            <p>{data?.data?.first_name+" "+data?.data?.last_name}</p>
          </div>
          <MenuLink to="/feedback">
            History
          </MenuLink>
          <MenuLink to="/feedback/create">
            Create
          </MenuLink>
        </Menu>
        <div>
          <MenuLink to="/logout">
            Sign Out
          </MenuLink>
        </div>
      </PrimaryNav>
    </>
  )
}
export default Navbar