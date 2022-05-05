
  describe("some-evil-spec=613", () => {
    it("evil-block-613", () => {
      window.evil_613 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  