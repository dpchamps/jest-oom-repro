
  describe("some-evil-spec=301", () => {
    it("evil-block-301", () => {
      window.evil_301 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  