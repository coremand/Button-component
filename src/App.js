import React from 'react';
import Button from './Button';
import { GoBell } from "react-icons/go"

export default function App() {

  return (
    <div>
        <div>
            <Button primary>
                <GoBell />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button>Search</Button>
        </div>
        <div>
            <Button outline primary>Login</Button>
        </div>
        <div>
            <Button outline secondary>Checkout</Button>
        </div>
        <div>
            <Button danger>Danger</Button>
        </div>
    </div>
  )
}
