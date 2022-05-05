
  describe("some-evil-spec=882", () => {
    it("evil-block-882", () => {
      window.evil_882 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  