
  describe("some-evil-spec=576", () => {
    it("evil-block-576", () => {
      window.evil_576 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  