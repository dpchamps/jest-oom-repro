
  describe("some-evil-spec=952", () => {
    it("evil-block-952", () => {
      window.evil_952 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  