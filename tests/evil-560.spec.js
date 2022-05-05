
  describe("some-evil-spec=560", () => {
    it("evil-block-560", () => {
      window.evil_560 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  