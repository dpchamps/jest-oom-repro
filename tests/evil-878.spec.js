
  describe("some-evil-spec=878", () => {
    it("evil-block-878", () => {
      window.evil_878 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  