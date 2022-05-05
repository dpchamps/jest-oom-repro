
  describe("some-evil-spec=239", () => {
    it("evil-block-239", () => {
      window.evil_239 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  