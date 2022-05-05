
  describe("some-evil-spec=278", () => {
    it("evil-block-278", () => {
      window.evil_278 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  