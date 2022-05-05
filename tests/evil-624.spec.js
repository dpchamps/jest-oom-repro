
  describe("some-evil-spec=624", () => {
    it("evil-block-624", () => {
      window.evil_624 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  