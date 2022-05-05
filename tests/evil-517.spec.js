
  describe("some-evil-spec=517", () => {
    it("evil-block-517", () => {
      window.evil_517 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  