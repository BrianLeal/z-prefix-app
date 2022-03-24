import React, { createContext, useEffect, useState } from 'react';

export const SiteContext = createContext({currentUser: null, setCurrentUser: () => {}});
