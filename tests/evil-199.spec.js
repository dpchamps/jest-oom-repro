
  describe("some-evil-spec=199", () => {
    it("evil-block-199", () => {
      window.evil_199 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  