class Peer {
   peer: RTCPeerConnection;
   constructor(config?: RTCConfiguration) {
      this.peer = new RTCPeerConnection();
   }

   createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit> {
      return this.peer.createOffer(options);
   }

   createAnswer(
      options?: RTCAnswerOptions
   ): Promise<RTCSessionDescriptionInit> {
      return this.peer.createAnswer(options);
   }

   setLocalDescription(description: RTCSessionDescriptionInit): Promise<void> {
      return this.peer.setLocalDescription(description);
   }

   setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void> {
      return this.peer.setRemoteDescription(description);
   }

   close(): void {
      this.peer.close();
   }
}

export default Peer;
