
  describe("some-evil-spec=73", () => {
    it("evil-block-73", () => {
      window.evil_73 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  