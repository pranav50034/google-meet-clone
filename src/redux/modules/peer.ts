import Peer from "@/services/peer";

// actionTypes.ts
const INITIALIZE_PEER = "INITIALIZE_PEER";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";
const SET_PEER = "SET_PEER";
const SET_LOCAL_DESCRIPTION = "SET_LOCAL_DESCRIPTION";
const SET_REMOTE_DESCRIPTION = "SET_REMOTE_DESCRIPTION";

export const initializePeer = (config?: RTCConfiguration) => ({
   type: INITIALIZE_PEER,
   payload: config,
});

export const setLoading = (isLoading: boolean) => ({
   type: SET_LOADING,
   payload: isLoading,
});

export const setError = (error: string | null) => ({
   type: SET_ERROR,
   payload: error,
});

export const setPeer = (peer: Peer | null) => ({
   type: SET_PEER,
   payload: peer,
});

export const setLocalDescriptionAction = (
   description: RTCSessionDescriptionInit
) => ({
   type: SET_LOCAL_DESCRIPTION,
   payload: description,
});

export const setRemoteDescriptionAction = (
   description: RTCSessionDescriptionInit
) => ({
   type: SET_REMOTE_DESCRIPTION,
   payload: description,
});

interface PeerState {
   peer: Peer | null;
   isLoading: boolean;
   error: string | null;
   localDescription: RTCSessionDescriptionInit | null;
   remoteDescription: RTCSessionDescriptionInit | null;
}

const initialState: PeerState = {
   peer: null,
   isLoading: false,
   error: null,
   localDescription: null,
   remoteDescription: null,
};

export const peerReducer = (state = initialState, action: any): PeerState => {
   switch (action.type) {
      case INITIALIZE_PEER:
         return {
            ...state,
            peer: new Peer(action.payload),
         };
      case SET_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         };
      case SET_ERROR:
         return {
            ...state,
            error: action.payload,
         };
      case SET_PEER:
         return {
            ...state,
            peer: action.payload,
         };
      case SET_LOCAL_DESCRIPTION:
         return {
            ...state,
            localDescription: action.payload,
         };
      case SET_REMOTE_DESCRIPTION:
         return {
            ...state,
            remoteDescription: action.payload,
         };
      default:
         return state;
   }
};
