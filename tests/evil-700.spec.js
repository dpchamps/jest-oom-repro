
  describe("some-evil-spec=700", () => {
    it("evil-block-700", () => {
      window.evil_700 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  