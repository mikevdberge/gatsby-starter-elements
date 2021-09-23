import React from "react"
import { API } from '@stoplight/elements';

require('@stoplight/elements/styles.min.css');

export default function Home() {
  return <div>
      <API 
        apiDescriptionUrl="https://raw.githubusercontent.com/mikevdberge/safelinks/master/reference/schema.json?token=ADC2BRGIDWRT7LP3LXCXFJLBJQP7A"
        router={typeof window === 'undefined' ? 'memory' : 'history'} 
      />
    </div>
}
