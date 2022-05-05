
  describe("some-evil-spec=812", () => {
    it("evil-block-812", () => {
      window.evil_812 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  