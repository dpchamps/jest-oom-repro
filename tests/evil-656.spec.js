
  describe("some-evil-spec=656", () => {
    it("evil-block-656", () => {
      window.evil_656 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  