import React from 'react'

export const ComponentProvider = ({children}) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return <ToggleComponent.Provider value={{showReservation, setShowReservation, showRegister, setShowRegister, showLogin, setShowLogin, loading, setLoading, showAddBranches, setShowAddBranches, showAddServices, setShowAddServices, showAllReviews, setShowAllReviews, showAllReservations, setShowAllReservations }}>{children}</ToggleComponent.Provider>
}
