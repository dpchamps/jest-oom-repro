
  describe("some-evil-spec=745", () => {
    it("evil-block-745", () => {
      window.evil_745 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  