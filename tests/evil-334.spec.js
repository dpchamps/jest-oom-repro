
  describe("some-evil-spec=334", () => {
    it("evil-block-334", () => {
      window.evil_334 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  