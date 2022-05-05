
  describe("some-evil-spec=677", () => {
    it("evil-block-677", () => {
      window.evil_677 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  