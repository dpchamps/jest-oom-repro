
  describe("some-evil-spec=641", () => {
    it("evil-block-641", () => {
      window.evil_641 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  