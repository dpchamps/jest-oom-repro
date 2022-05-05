
  describe("some-evil-spec=522", () => {
    it("evil-block-522", () => {
      window.evil_522 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  