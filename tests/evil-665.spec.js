
  describe("some-evil-spec=665", () => {
    it("evil-block-665", () => {
      window.evil_665 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  