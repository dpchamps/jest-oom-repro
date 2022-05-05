
  describe("some-evil-spec=313", () => {
    it("evil-block-313", () => {
      window.evil_313 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  