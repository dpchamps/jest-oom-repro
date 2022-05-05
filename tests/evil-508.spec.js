
  describe("some-evil-spec=508", () => {
    it("evil-block-508", () => {
      window.evil_508 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  